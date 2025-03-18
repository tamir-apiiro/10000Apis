
const express = require('express')
import {handler9842} from "./handler9842";
const app = express()
app.get('/9842', handler9842)
app.listen(3000, () => {})
        