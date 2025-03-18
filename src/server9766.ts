
const express = require('express')
import {handler9766} from "./handler9766";
const app = express()
app.get('/9766', handler9766)
app.listen(3000, () => {})
        