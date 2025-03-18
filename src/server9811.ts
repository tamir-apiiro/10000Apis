
const express = require('express')
import {handler9811} from "./handler9811";
const app = express()
app.get('/9811', handler9811)
app.listen(3000, () => {})
        