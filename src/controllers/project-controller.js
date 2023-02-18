import Project from "../models/Project.js";

export const getAllProject = async (req, res) => {
  const data = await Project.find();

  const transformData = data.map((project) => {
    return {
      title: project.title,
      description: project.description,
      image: project.image,
      category: project.category,
    };
  });

  return res.status(200).json(transformData);
};

export const getWebProjects = async (req, res) => {
  const data = await Project.find({ category: "web" });

  const transformData = data.map((project) => {
    return {
      title: project.title,
      description: project.description,
      image: project.image,
      category: project.category,
    };
  });

  return res.status(200).json(transformData);
};

export const getAppProjects = async (req, res) => {
  const data = await Project.find({ category: "app" });

  const transformData = data.map((project) => {
    return {
      title: project.title,
      description: project.description,
      image: project.image,
      category: project.category,
    };
  });

  return res.status(200).json(transformData);
};

export const getGraphicProjects = async (req, res) => {
  const data = await Project.find({ category: "graphic" });

  const transformData = data.map((project) => {
    return {
      title: project.title,
      description: project.description,
      image: project.image,
      category: project.category,
    };
  });

  return res.status(200).json(transformData);
};
