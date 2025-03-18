
const express = require('express')
import {handler2896} from "./handler2896";
const app = express()
app.get('/2896', handler2896)
app.listen(3000, () => {})
        