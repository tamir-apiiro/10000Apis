
const express = require('express')
import {handler4603} from "./handler4603";
const app = express()
app.get('/4603', handler4603)
app.listen(3000, () => {})
        