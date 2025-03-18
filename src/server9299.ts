
const express = require('express')
import {handler9299} from "./handler9299";
const app = express()
app.get('/9299', handler9299)
app.listen(3000, () => {})
        