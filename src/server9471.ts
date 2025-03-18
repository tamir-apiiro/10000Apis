
const express = require('express')
import {handler9471} from "./handler9471";
const app = express()
app.get('/9471', handler9471)
app.listen(3000, () => {})
        