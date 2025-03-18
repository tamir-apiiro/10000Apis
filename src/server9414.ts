
const express = require('express')
import {handler9414} from "./handler9414";
const app = express()
app.get('/9414', handler9414)
app.listen(3000, () => {})
        