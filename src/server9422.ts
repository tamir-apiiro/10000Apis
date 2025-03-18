
const express = require('express')
import {handler9422} from "./handler9422";
const app = express()
app.get('/9422', handler9422)
app.listen(3000, () => {})
        