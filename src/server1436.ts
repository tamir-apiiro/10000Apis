
const express = require('express')
import {handler1436} from "./handler1436";
const app = express()
app.get('/1436', handler1436)
app.listen(3000, () => {})
        