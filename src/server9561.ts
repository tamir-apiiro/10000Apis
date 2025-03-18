
const express = require('express')
import {handler9561} from "./handler9561";
const app = express()
app.get('/9561', handler9561)
app.listen(3000, () => {})
        