
const express = require('express')
import {handler9058} from "./handler9058";
const app = express()
app.get('/9058', handler9058)
app.listen(3000, () => {})
        