
const express = require('express')
import {handler9543} from "./handler9543";
const app = express()
app.get('/9543', handler9543)
app.listen(3000, () => {})
        