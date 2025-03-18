
const express = require('express')
import {handler1539} from "./handler1539";
const app = express()
app.get('/1539', handler1539)
app.listen(3000, () => {})
        