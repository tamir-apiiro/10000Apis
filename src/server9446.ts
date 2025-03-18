
const express = require('express')
import {handler9446} from "./handler9446";
const app = express()
app.get('/9446', handler9446)
app.listen(3000, () => {})
        