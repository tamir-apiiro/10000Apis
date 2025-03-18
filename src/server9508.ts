
const express = require('express')
import {handler9508} from "./handler9508";
const app = express()
app.get('/9508', handler9508)
app.listen(3000, () => {})
        