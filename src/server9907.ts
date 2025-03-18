
const express = require('express')
import {handler9907} from "./handler9907";
const app = express()
app.get('/9907', handler9907)
app.listen(3000, () => {})
        