
const express = require('express')
import {handler9368} from "./handler9368";
const app = express()
app.get('/9368', handler9368)
app.listen(3000, () => {})
        