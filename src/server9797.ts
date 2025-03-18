
const express = require('express')
import {handler9797} from "./handler9797";
const app = express()
app.get('/9797', handler9797)
app.listen(3000, () => {})
        