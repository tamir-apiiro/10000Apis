
const express = require('express')
import {handler4229} from "./handler4229";
const app = express()
app.get('/4229', handler4229)
app.listen(3000, () => {})
        