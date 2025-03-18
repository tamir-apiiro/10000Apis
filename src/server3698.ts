
const express = require('express')
import {handler3698} from "./handler3698";
const app = express()
app.get('/3698', handler3698)
app.listen(3000, () => {})
        