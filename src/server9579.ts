
const express = require('express')
import {handler9579} from "./handler9579";
const app = express()
app.get('/9579', handler9579)
app.listen(3000, () => {})
        