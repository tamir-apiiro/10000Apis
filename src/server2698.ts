
const express = require('express')
import {handler2698} from "./handler2698";
const app = express()
app.get('/2698', handler2698)
app.listen(3000, () => {})
        