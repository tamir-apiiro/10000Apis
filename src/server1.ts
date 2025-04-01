
const express = require('express')
import {handler1} from "./handler1";
const app = express()
app.get('/1', handler1)
app.listen(3000, () => {})