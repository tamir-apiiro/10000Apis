
const express = require('express')
import {handler9274} from "./handler9274";
const app = express()
app.get('/9274', handler9274)
app.listen(3000, () => {})
        