
const express = require('express')
import {handler9236} from "./handler9236";
const app = express()
app.get('/9236', handler9236)
app.listen(3000, () => {})
        