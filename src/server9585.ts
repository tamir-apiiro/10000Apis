
const express = require('express')
import {handler9585} from "./handler9585";
const app = express()
app.get('/9585', handler9585)
app.listen(3000, () => {})
        