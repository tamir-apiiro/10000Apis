
const express = require('express')
import {handler9549} from "./handler9549";
const app = express()
app.get('/9549', handler9549)
app.listen(3000, () => {})
        