
const express = require('express')
import {handler9960} from "./handler9960";
const app = express()
app.get('/9960', handler9960)
app.listen(3000, () => {})
        