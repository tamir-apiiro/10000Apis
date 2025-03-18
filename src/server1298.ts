
const express = require('express')
import {handler1298} from "./handler1298";
const app = express()
app.get('/1298', handler1298)
app.listen(3000, () => {})
        