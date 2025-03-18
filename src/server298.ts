
const express = require('express')
import {handler298} from "./handler298";
const app = express()
app.get('/298', handler298)
app.listen(3000, () => {})
        