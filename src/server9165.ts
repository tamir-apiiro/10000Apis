
const express = require('express')
import {handler9165} from "./handler9165";
const app = express()
app.get('/9165', handler9165)
app.listen(3000, () => {})
        