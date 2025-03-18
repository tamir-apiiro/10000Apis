
const express = require('express')
import {handler9921} from "./handler9921";
const app = express()
app.get('/9921', handler9921)
app.listen(3000, () => {})
        