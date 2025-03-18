
const express = require('express')
import {handler9752} from "./handler9752";
const app = express()
app.get('/9752', handler9752)
app.listen(3000, () => {})
        