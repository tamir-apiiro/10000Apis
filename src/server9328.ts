
const express = require('express')
import {handler9328} from "./handler9328";
const app = express()
app.get('/9328', handler9328)
app.listen(3000, () => {})
        