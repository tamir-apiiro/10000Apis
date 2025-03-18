
const express = require('express')
import {handler9970} from "./handler9970";
const app = express()
app.get('/9970', handler9970)
app.listen(3000, () => {})
        