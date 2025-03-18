
const express = require('express')
import {handler1603} from "./handler1603";
const app = express()
app.get('/1603', handler1603)
app.listen(3000, () => {})
        