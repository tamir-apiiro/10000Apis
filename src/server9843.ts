
const express = require('express')
import {handler9843} from "./handler9843";
const app = express()
app.get('/9843', handler9843)
app.listen(3000, () => {})
        