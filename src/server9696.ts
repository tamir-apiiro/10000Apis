
const express = require('express')
import {handler9696} from "./handler9696";
const app = express()
app.get('/9696', handler9696)
app.listen(3000, () => {})
        