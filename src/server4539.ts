
const express = require('express')
import {handler4539} from "./handler4539";
const app = express()
app.get('/4539', handler4539)
app.listen(3000, () => {})
        