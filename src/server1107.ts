
const express = require('express')
import {handler1107} from "./handler1107";
const app = express()
app.get('/1107', handler1107)
app.listen(3000, () => {})
        