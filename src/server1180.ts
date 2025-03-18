
const express = require('express')
import {handler1180} from "./handler1180";
const app = express()
app.get('/1180', handler1180)
app.listen(3000, () => {})
        