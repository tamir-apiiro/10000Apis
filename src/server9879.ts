
const express = require('express')
import {handler9879} from "./handler9879";
const app = express()
app.get('/9879', handler9879)
app.listen(3000, () => {})
        