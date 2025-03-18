
const express = require('express')
import {handler9364} from "./handler9364";
const app = express()
app.get('/9364', handler9364)
app.listen(3000, () => {})
        