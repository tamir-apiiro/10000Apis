
const express = require('express')
import {handler9776} from "./handler9776";
const app = express()
app.get('/9776', handler9776)
app.listen(3000, () => {})
        