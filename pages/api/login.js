export default (req, res) => {
  console.log(Object.keys);
  res.status(200).json({ message: 'deveria fazer login' });
};
