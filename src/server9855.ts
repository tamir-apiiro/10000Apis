
const express = require('express')
import {handler9855} from "./handler9855";
const app = express()
app.get('/9855', handler9855)
app.listen(3000, () => {})
        