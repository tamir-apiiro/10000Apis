
const express = require('express')
import {handler9748} from "./handler9748";
const app = express()
app.get('/9748', handler9748)
app.listen(3000, () => {})
        