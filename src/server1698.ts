
const express = require('express')
import {handler1698} from "./handler1698";
const app = express()
app.get('/1698', handler1698)
app.listen(3000, () => {})
        