
const express = require('express')
import {handler9430} from "./handler9430";
const app = express()
app.get('/9430', handler9430)
app.listen(3000, () => {})
        