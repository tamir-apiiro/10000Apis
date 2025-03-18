
const express = require('express')
import {handler9840} from "./handler9840";
const app = express()
app.get('/9840', handler9840)
app.listen(3000, () => {})
        