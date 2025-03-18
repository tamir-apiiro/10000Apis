
const express = require('express')
import {handler9983} from "./handler9983";
const app = express()
app.get('/9983', handler9983)
app.listen(3000, () => {})
        